def last2(str):
  if len(str) < 2: return 0
  
  cnt = 0
  for i in range(len(str) - 2):
    if str[i : i + 2] == str[len(str)-2:]:
      cnt += 1
  return cnt