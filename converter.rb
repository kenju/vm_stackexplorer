require 'json'

LOG_FILE_PATH = './log_original.txt'

IGNORE_INSNS = %w(:inherited :set_encoding :initialize :new)

control_frames = []

File.open(LOG_FILE_PATH, "r") do |f|
  frame = Hash.new
  stacks = []
  skipping = false

  # TODO: refactor iterate logic
  f.each_line do |line|
    # empty line
    if line.chomp.empty?
      unless stacks.empty?
        frame["stacks"] = stacks
        control_frames << frame
      end
      # initialize
      frame = Hash.new
      stacks = []
      skipping = false
      next
    end

    next if skipping

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
    
    if IGNORE_INSNS.include? insns
      frame = Hash.new
      stacks = []
      skipping = true
      next
    end

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
