import { NextResponse } from "next/server"

export async function GET() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY
    const channelId = process.env.YOUTUBE_CHANNEL_ID

    if (!apiKey || !channelId) {
      return NextResponse.json({ error: "YouTube API credentials not configured" }, { status: 500 })
    }

    // Fetch the latest video from the channel
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1&type=video`,
      { next: { revalidate: 300 } }, // Cache for 5 minutes
    )

    if (!response.ok) {
      throw new Error("Failed to fetch YouTube data")
    }

    const data = await response.json()

    if (!data.items || data.items.length === 0) {
      return NextResponse.json({ video: null })
    }

    const video = data.items[0]
    const videoData = {
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.medium.url,
      channel: video.snippet.channelTitle,
      videoId: video.id.videoId,
      publishedAt: video.snippet.publishedAt,
    }

    return NextResponse.json({ video: videoData })
  } catch (error) {
    console.error("[v0] YouTube API error:", error)
    return NextResponse.json({ error: "Failed to fetch YouTube data" }, { status: 500 })
  }
}
