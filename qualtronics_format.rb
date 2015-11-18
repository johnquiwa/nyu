def EditArray(array)
i = 0
num = 1
while i < array.length
	if i == 0
		array[i] = "[[Block]]" + "\n #{num}. " + array[i] + "\n\n" + "[[Block]]"
		puts array[i]
	elsif i == array.length - 1
		array[i] = "#{num}. " + array[i]
		puts array[i]
	else
		array[i] = "#{num}. " + array[i] + "\n\n" + "[[Block]]"
		puts array[i]
	end
	i += 1
	num += 1
end

file = File.new("data.txt", "w")
file.puts(array)
file.close

end

EditArray(array)
