import { Github, Facebook, Instagram, Linkedin, Code2 } from "lucide-react"

const links = [
  { href: "https://github.com/tanmayyy26", label: "GitHub", Icon: Github },
  { href: "https://fb.com/tanmay.wagh.7739", label: "Facebook", Icon: Facebook },
  { href: "https://instagram.com/tanmaywagh_26", label: "Instagram", Icon: Instagram },
  { href: "https://linkedin.com/in/tanmay-wagh-446141345", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.leetcode.com/tanmaywagh26", label: "LeetCode", Icon: Code2 },
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md bg-background/10 border border-border/30 text-muted-foreground shadow-lg transition-all hover:text-primary hover:bg-primary/10 hover:border-primary/50 hover:scale-110"
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}
