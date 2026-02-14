import { NextResponse } from "next/server"

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME || "vercel"
    const token = process.env.GITHUB_TOKEN

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    }

    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    // Fetch contribution data using GitHub GraphQL API
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers,
      body: JSON.stringify({ query, variables: { username } }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      return NextResponse.json({
        totalContributions: 0,
        weeks: [],
      })
    }

    const data = await response.json()

    if (data.errors) {
      return NextResponse.json({
        totalContributions: 0,
        weeks: [],
      })
    }

    const contributionData = data.data?.user?.contributionsCollection?.contributionCalendar

    return NextResponse.json({
      totalContributions: contributionData?.totalContributions || 0,
      weeks: contributionData?.weeks || [],
    })
  } catch (error) {
    return NextResponse.json({
      totalContributions: 0,
      weeks: [],
    })
  }
}
