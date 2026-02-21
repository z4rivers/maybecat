#!/bin/bash
# PreToolUse hook: Protect Home.tsx (carousel system) from casual edits
#
# Home.tsx contains the carousel system that took 19 commits to stabilize.
# This hook blocks Edit/Write operations on it and requires explicit user approval.

# Read the tool event from stdin
input=$(cat)

tool_name=$(echo "$input" | jq -r '.tool_name // empty')
file_path=$(echo "$input" | jq -r '.tool_input.file_path // empty')

# Only check Edit and Write tools
if [[ "$tool_name" != "Edit" && "$tool_name" != "Write" ]]; then
  exit 0
fi

# Check if the target is Home.tsx
if echo "$file_path" | grep -qi 'src/pages/Home\.tsx'; then
  echo '{"decision":"block","reason":"PROTECTED FILE: src/pages/Home.tsx contains the carousel system (two rotation modes, mobile scroll teleporting, Framer Motion animations, responsive breakpoints). This file took 19 commits to stabilize. Read .planning/CAROUSEL-ARCHITECTURE.md before proposing changes. The user must explicitly approve edits to this file."}'
  exit 0
fi

exit 0
