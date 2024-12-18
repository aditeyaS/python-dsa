export const pysearchR = `def search(root, x):
  if root == None:
    return False
  elif root.val == x:
    return True
  elif root.val > x:
    return search(root.left, x)
  else:
    return search(root.right, x)`;

export const pysearchI = `def search(root, x):
  while root:
    if root.val == x:
      return True
    root = root.left if root.val > x else root.right
  return False`;

export const pyinsertR = `def insert(root, x):
  if root == None:
    return Node(x)
  elif root.val == x:
    return root
  elif root.val > x:
    root.left = insert(root.left, x)
  else:
    root.right = insert(root.right, x)
  return root`;

export const pyinsertI = `def insert(root, x):
  if root == None:
    return Node(x)
  p = None # parent
  curr = root
  while curr:
    p = curr
    if curr.val == x:
      return root
    curr = curr.left if curr.val > x else curr.right
  if p.val > x:
    p.left = Node(x)
  else:
    p.right = Node(x)
  return root`;

export const pydeleteR = `def delete(root, x):
  if root == None:
    return
  if root.val > x:
    root.left = delete(root.left, x)
  elif root.val < x:
    root.right = delete(root.right, x)
  else:
    if root.left == None:
      return root.right
    elif root.right == None:
      return root.left
    else:
      succ = getSuccessor(root.right, x)
      root.val = succ
      root.right = delete(root.right, succ)
  return root
  
def getSuccessor(root, x):
  while root.left:
    root = root.left
  return root.val`;
