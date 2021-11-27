def atoi (s)
    s_to_change = ''
    negator = 1
    s_arr = s.split('')
    s_arr.each_with_index do |i, idx|
        if (s_arr[idx] === "+" || s_arr[idx] === "-") &&
            ((s_arr[idx - 1] === "+" || s_arr[idx - 1] === "-") || s_to_change.length > 0) &&
            idx != 0
            break 
        elsif i === ' ' && (s_to_change.length > 0 || (s_arr[idx - 1] != ' ' && idx != 0))
            break
        elsif i === ' '||i === "+"
            next 
        elsif i === '-'
            negator = -1
        elsif i.to_i.class == Integer 
            s_to_change += i
        else
            break 
        end
    end
    s_to_change = s_to_change.to_i * negator
    if s_to_change < -2**31 
        return -2**31
    elsif s_to_change > (2**31 - 1)
        return 2**31 - 1
    else
        return s_to_change
    end
end
