import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Luu Min, Full-Stack Developer & Product Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = (file: string) => readFile(join(process.cwd(), "src/assets", file));

export default async function OpengraphImage() {
  const [portrait, regular, semibold, bold] = await Promise.all([
    asset("og-portrait.png"),
    asset("inter-400.woff"),
    asset("inter-600.woff"),
    asset("inter-700.woff"),
  ]);
  const portraitSrc = `data:image/png;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 80px",
          gap: 64,
          backgroundColor: "#0A0F1E",
          backgroundImage:
            "radial-gradient(circle at 12% 20%, rgba(59,130,246,0.35), transparent 45%), radial-gradient(circle at 92% 85%, rgba(139,92,246,0.3), transparent 45%)",
          color: "#F8FAFC",
          fontFamily: "Inter",
        }}>
        <div
          style={{
            display: "flex",
            padding: 6,
            borderRadius: "50% / 40%",
            backgroundImage: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
          }}>
          <div
            style={{
              display: "flex",
              width: 300,
              height: 400,
              borderRadius: "50% / 40%",
              overflow: "hidden",
              backgroundImage:
                "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.55), transparent 65%), linear-gradient(180deg, #111A2E, rgba(139,92,246,0.45))",
            }}>
            <img src={portraitSrc} width={300} height={400} alt='' />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 30, color: "#94A3B8", marginBottom: 8 }}>
            Hello, I&apos;m
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -2,
              backgroundImage: "linear-gradient(90deg, #F8FAFC, #60A5FA 55%, #A78BFA)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.05,
            }}>
            Luu Min
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, marginTop: 18 }}>
            Full-Stack Developer & Product Builder
          </div>
          <div style={{ fontSize: 28, color: "#94A3B8", marginTop: 22 }}>
            Next.js · TypeScript · Prisma · PostgreSQL
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 28,
              color: "#60A5FA",
            }}>
            luu-min.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: semibold, weight: 600, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}
