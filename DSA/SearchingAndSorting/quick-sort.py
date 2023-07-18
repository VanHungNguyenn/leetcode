def quicksort(array):
    if len(array) <= 1:
        return array

    pivot = array[0]
    left = []
    right = []

    for i in range(1, len(array)):
        if array[i] < pivot:
            left.append(array[i])
        else:
            right.append(array[i])

    sortedLeft = quicksort(left)
    sortedRight = quicksort(right)

    return sortedLeft + [pivot] + sortedRight


test = [21, 4, 1, 3, 9, 20, 25, 6, 21, 14]
print(quicksort(test))
