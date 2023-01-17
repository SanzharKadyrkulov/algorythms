class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const A = new Node(10);
A.right = new Node(20);
A.left = new Node(5);
// console.log(A);

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
      return;
    }
    let cur = this.root;
    let par = null;
    while (cur !== null) {
      par = cur;
      if (cur.value === key) {
        console.log("can not add same number");
        return;
      }
      if (cur.value > key) {
        cur = cur.left;
      } else if (cur.value < key) {
        cur = cur.right;
      }
    }
    if (par.value > key) {
      par.left = new Node(key);
    } else if (par.value < key) {
      par.right = new Node(key);
    }
  }

  insert_rec(key) {
    if (this.root === null) {
      this.root = new Node(key);
      return;
    }

    let cur = this.root;
    function inner(root, key) {
      if (root === null) {
        return;
      }

      if (root.value > key) {
        if (root.left === null) {
          root.left = new Node(key);
        } else {
          inner(root.left, key);
        }
      } else if (root.value < key) {
        if (root.right === null) {
          root.right = new Node(key);
        } else {
          inner(root.right, key);
        }
      } else {
        console.log("can not add same number");
      }
    }
    inner(cur, key);
  }

  search(key) {
    let cur = this.root;
    while (cur !== null) {
      if (cur.value > key) {
        cur = cur.left;
      } else if (cur.value < key) {
        // console.log("worked");
        cur = cur.right;
      } else if (cur.value === key) {
        console.log(`key is found ${key}`);
        return true;
      }
      console.log("not found", key);
      return false;
    }
  }
  min() {
    let cur = this.root;
    let min = null;
    while (cur !== null) {
      min = cur;
      cur = cur.left;
      // console.log(cur.value);
    }
    console.log(min.value);
  }
  max() {
    let cur = this.root;
    let max = null;
    while (cur !== null) {
      max = cur;
      cur = cur.right;
      // console.log(cur.value);
    }
    console.log(max.value);
  }

  delete(key) {
    let check = this.search(key);

    if (!check) {
      console.log("not found");
      return;
    } else {
      this.destroy(key);
    }
  }

  destroy(key) {
    let cur = this.root;
    let par = null;
    while (cur.value !== null) {
      par = cur;
      if (cur.value > key) {
        cur = cur.left;
      } else if (cur.value < key) {
        cur = cur.right;
      }
    }

    // if(par === null){
    //   if(this.find_side)
    // }

    if (cur.left === null && cur.right === null) {
      if (this.find_side(cur, par) === true) {
        parent.right = cur.right;
      } else if (this.find_side(cur, par) === false) {
        parent.left = cur.right;
      } else {
        console.log("error");
      }
    }

    if (cur.left === null && cur.right !== null) {
      if (this.find_side(cur, par) === true) {
        parent.right = cur.left;
      } else if (this.find_side(cur, par) === false) {
        parent.left = cur.left;
      } else {
        console.log("error");
      }
    } else if (cur.left !== null && cur.right === null) {
    }
  }

  find_side(cur, par) {
    if (par.right === cur) {
      return true;
    } else if (par.left === cur) {
      return false;
    } else {
      return null;
    }
  }

  display() {
    let cur = this.root;
    function dis(root) {
      if (root === null) {
        return;
      }
      dis(root.left);
      console.log(root.value);
      dis(root.right);
    }
    dis(cur);
  }
}

const tree = new BinarySearchTree();
// tree.root = A;
tree.insert_rec(10);
tree.insert_rec(5);
tree.insert_rec(20);
tree.insert_rec(3);
// tree.search(3);
tree.display();
// tree.min();
// tree.max();
console.log(tree);
tree.search(3);
tree.display();
