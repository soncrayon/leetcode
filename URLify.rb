# built in ruby methods
def URLify (str, length)
    str.strip.gsub(" ", "%20")
end

# without built in methods

def URLify_brute (str, length)
    str_array = str.split("")
    stripped_arr = str_array.select.with_index{|itm, idx| 
        if itm === " "
            str_array[idx - 1] != " " && str_array[idx + 1] != " "
        else
            true 
        end
    }
    stripped_arr.map{|itm| 
        if itm === " "
            itm = "%20"
        else
            itm
        end
    }.join("")
end

# p URLify(" ain't nothing going on  ", 10)
p URLify_brute(" ain't nothing going on  ", 10)

# TODO: need to figure out why the length of the string is a needed input for this method