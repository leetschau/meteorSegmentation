Seg =
  parse: (inp, dict) ->
    # split by english, number and Chinese parts
    rawParts = inp.split /\b/
    parts = ( part for part in rawParts when part.trim() )

    # put all non-Chinese words into words list
    nonChn = ( part for part in parts when /^\w+$/.test part )
    chnParts = ( part for part in parts when /^\W+$/.test part )
    console.log(chnParts)
    findWords = (inp, base, head) ->
      if head >= inp.length
        [inp[head-1..]]
      else
        probe = head
        probe += 1 while inp[base .. probe] in dict
        console.log('probe: ' + probe)
        [inp[base .. probe-1]].concat findWords inp, probe, probe+1
    segChn = (inp) -> findWords inp, 0, 1
    chnWords = ( segChn part for part in chnParts )
    # add "..." after nested arrays to flatten it
    nonChn.concat chnWords...
