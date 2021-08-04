# check if one string is one edit away from a second string

def one_away (str1, str2)
    is_one_away = false 
    if str1.length === str2.length - 1
        matches = []
        for x in str1.chars do
            for y in str2.chars do
                if x === y 
                    matches << x
                end
            end
        end
        if matches.length === str1.length
            is_one_away = true
        end
    elsif str1.length === str2.length + 1
        matches = []
        for x in str2.chars do
            for y in str1.chars do
                if x === y 
                    matches << x
                end
            end
        end
        if matches.length === str2.length
            is_one_away = true
        end
    elsif str1.length === str2.length
        diff_array = str1.split("").select.with_index{|itm, idx|
            itm != str2[idx]
        }
        if diff_array.length <= 1
            is_one_away = true
        end
    end
return is_one_away 
end

p one_away("corps", "porps")

# refactor to do all checks in one pass