"use client"

import { useEffect, useState } from "react"

type ContributionDay = {
  contributionCount: number
  date: string
}

type Week = {
  contributionDays: ContributionDay[]
}

type GitHubData = {
  totalContributions: number
  weeks: Week[]
}

export function GitHubSection() {
  const [data, setData] = useState<GitHubData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/github/contributions")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setData(data)
        }
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  const getColor = (count: number) => {
    if (count === 0) return "bg-muted/50"
    if (count < 3) return "bg-green-200 dark:bg-green-900/50"
    if (count < 6) return "bg-green-300 dark:bg-green-700/70"
    if (count < 9) return "bg-green-500 dark:bg-green-600"
    return "bg-green-600 dark:bg-green-500"
  }

  return (
    <section className="py-16">
      <div className="container px-4 md:px-8 lg:px-10 xl:px-20">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">GitHub Activity</h2>

        <div className="mb-8 rounded-lg border bg-card p-6 md:p-8">
          {loading ? (
            <div className="flex h-32 items-center justify-center">
              <p className="text-sm text-muted-foreground">Loading contributions...</p>
            </div>
          ) : data && data.weeks.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {data.totalContributions} contributions in the last year
                </p>
              </div>
              <div className="overflow-x-auto pb-2">
                <div className="inline-flex gap-1">
                  {data.weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {week.contributionDays.map((day, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`h-3 w-3 rounded-sm transition-colors ${getColor(day.contributionCount)}`}
                          title={`${day.date}: ${day.contributionCount} contributions`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="h-3 w-3 rounded-sm bg-muted/50" />
                  <div className="h-3 w-3 rounded-sm bg-green-200 dark:bg-green-900/50" />
                  <div className="h-3 w-3 rounded-sm bg-green-300 dark:bg-green-700/70" />
                  <div className="h-3 w-3 rounded-sm bg-green-500 dark:bg-green-600" />
                  <div className="h-3 w-3 rounded-sm bg-green-600 dark:bg-green-500" />
                </div>
                <span>More</span>
              </div>
            </div>
          ) : (
            <div className="flex h-32 items-center justify-center rounded bg-muted">
              <p className="text-sm text-muted-foreground">
                Configure GitHub credentials to display contribution graph
              </p>
            </div>
          )}
        </div>

        <blockquote className="text-center italic text-muted-foreground">
          "Code is like humor. When you have to explain it, it's bad." — Cory House
        </blockquote>
      </div>
    </section>
  )
}
