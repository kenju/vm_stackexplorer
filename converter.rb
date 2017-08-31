require 'json'

LOG_FILE_PATH = './log.txt'

control_frames = []

File.open(LOG_FILE_PATH, "r") do |f|
  frame = Hash.new
  stacks = []
  f.each_line do |line|
    # empty line
    if line.chomp.empty?
      frame["stacks"] = stacks
      control_frames << frame
      frame = Hash.new
      stacks = []
      next
    end

    # Push or Pop
    if line.match(/\A(Push|Pop)/)
      frame["type"] = if (line == "Push +\n")
                        "push"
                      elsif (line == "Pop  -\n")
                        "pop"
                      end
       next
    end

    # stack frames
    count, pc, sp, ep, type, insns = line.split
    stacks << {
      "count": count.sub(/\Ac:/, ''),
      "pc": pc.sub(/\Ap:/, ''),
      "sp": sp.sub(/\As:/, ''),
      "ep": ep.sub(/\A[eE]:/, ''),
      "type": type,
      "insns": insns,
    }
  end
end

p control_frames

File.write('out.json', JSON.generate(control_frames))
