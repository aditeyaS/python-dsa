def buildHeap(l):
    n = len(l)
    for i in range((n - 2) // 2, -1, -1):
        maxHeapify(l, n, i)


def maxHeapify(l, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    if left < n and l[left] > l[largest]:
        largest = left
    if right < n and l[right] > l[largest]:
        largest = right
    if largest != i:
        l[i], l[largest] = l[largest], l[i]
        maxHeapify(l, n, largest)


def heapSort(l):
    n = len(l)
    buildHeap(l)
    for i in range(n - 1, 0, -1):
        l[i], l[0] = l[0], l[i]
        maxHeapify(l, i, 0)
