#REMEMBER TO PSEUDOCODE
def pad(array, min_size, value = None):
    if len(array) >= min_size:
        return array
    else: 
        for i in range(len(array), min_size):
            array.append(value)
    return array
print(pad([0,1,2,3], 4,))
print(pad([0,1,2,3], 5,))
print(pad([0,1,2,3], 5, "Working"))
print(pad([0,2,2,3,6], 8, "Forgot"))
