//sort.js
var library = {
  bubbleSort: function(a){
    for(var i = a.length; i >= 1; i--){
        for(var j = 0; j < i-1; j++){
            if(a[j] > a[j+1]){
                var temp = a[j+1];
                a[j+1] = a[j];
                a[j] = temp;
            }
        }
    }
  },

  selectionSort: function(a){
    for(var i = 0; i < a.length; i++){
        var smallestIndex = i;
        for(var j = i; j < a.length; j++){
            if(a[j] < a[smallestIndex]){
                smallestIndex = j;
            }
        }
        var temp = a[smallestIndex];
        a[smallestIndex] = a[i];
        a[i] = temp;
    }
  },

  insertionSort: function(a){
    for(var i = 1; i < a.length; i++){
        var current = a[i];
        var j = i-1;
        while(j >= 0 && current < a[j]){
            a[j+1] = a[j];
            j--;
        }
        a[j+1] = current;
    }
  },

  mergeSort: function(a, start, end){
    if(start == end){
        //single item, already sorted
    }
    else if(end - start == 1){
        //two items, sort if necessary
        if(a[start] > a[end]){
            var temp = a[end];
            a[end] = a[start];
            a[start] = temp;
        }
    }
    else{
        var mid = Math.floor((start + end)/2);
        library.mergeSort(a, start, mid);
        library.mergeSort(a, mid+1, end);
        library.merge(a, start, mid, mid+1, end);
    }
  },

  merge: function(a, start1, end1, start2, end2){
    var tempSize = end2 - start1 + 1;
    var i1 = start1;
    var i2 = start2;
    var temp = new Array(tempSize);
    for(var i = 0; i < tempSize; i++){
        if(i1 > end1){
            //first half is done
            while(i < tempSize){
                temp[i] = a[i2];
                i++;
                i2++;
            }
            break;
        }
        else if(i2 > end2){
            //second half is done
            while(i < tempSize){
                temp[i] = a[i1];
                i++;
                i1++;
            }
            break;
        }
        else if(a[i1] < a[i2]){
            temp[i] = a[i1];
            i1++;
        }
        else{
            temp[i] = a[i2];
            i2++;
        }
    }
    for(var i = 0; i< tempSize; i++){
        a[start1+i] = temp[i];
    }
  },


  quickSort: function(a, left, right){
    var start = left;
    var end = right;
    if(left == right){
      //do nothing, single element
    }
    else if(right - left == 1){
      if(a[left] > a[right]){
          var temp = a[right];
          a[right] = a[left];
          a[left] = temp;
      }
    }
    else{
      var pivot = a[Math.floor((left+right)/2)]
      while(left <= right){
        if(a[left] >= pivot && a[right] <= pivot){
          var temp = a[left];
          a[left] = a[right];
          a[right] = temp;
          left++;
          right--;
        }
        else{
          while(a[left] < pivot){
            left++;
          }
          while(a[right] > pivot){
            right--;
          }
        }
      }

      if(left == right){
        right++;
      }
      else{
        left--;
        right++;
      }
      library.quickSort(a, start, left);
      library.quickSort(a, right, end);

    }

  },

  printArray: function(a){
    var output = "[";
    for(var i = 0; i < a.length; i++){
      output += a[i];
      if(i != a.length-1){
        output += ", ";
      }
    }
    output += "]";
    console.log(output);
  },

  randomize: function(size){
    var a = new Array(size);
    for(var i = 0; i < size; i++){
      a[i] = Math.floor(Math.random()*size);
    }
    return a;
  },


}


module.exports = library;
