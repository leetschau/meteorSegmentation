Seg =
  parse: (inp) ->
    # split by english, number and Chinese Words
    rawParts = inp.split(/\b/)
    part for part in rawParts when part.trim()
    # split Chinese Words
