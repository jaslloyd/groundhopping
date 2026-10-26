-- Sets title, caption and keywords on one Apple Photos item, leaving its location untouched.
-- Usage: osascript tag.applescript <uuid> <title> <caption> <keyword1,keyword2,...>
on run argv
  set {u, t, c, kw} to argv
  set AppleScript's text item delimiters to ","
  set k to text items of kw
  tell application "Photos"
    set p to media item id (u & "/L0/001")
    set locA to location of p
    set name of p to t
    set description of p to c
    set keywords of p to k
    set locB to location of p
    return t & " | location unchanged: " & ((locA as text) = (locB as text))
  end tell
end run
