class FizzBuzz

    def nums (max_num)
        (1..max_num).map {|num| output(num)}
    end

    def output (num)
        str = ''
        if num % 3 === 0 then str += 'fizz' end
        if num % 5 === 0 then str += 'buzz' end
        if str.empty? then return num end 
        return str
    end

end

p FizzBuzz.new.nums(30)