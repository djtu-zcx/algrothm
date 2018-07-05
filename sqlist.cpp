#include <stdio.h>
#define MAX 20
typedef int ElemType;

typedef struct{
    ElemType data[MAX];
    int length;
}Sqlist;
// insert the element with location
bool insertElem(Sqlist *l,int i,ElemType elem){
    if(l->length == MAX){
      return false;
        }
    if(i<1 || i>l->length+1){ //not enough addition to insert
      return false;
        }
     if(i<l->length){
         //move the element, give the station
         for(int k = l->length-1;k>i;k--){
            l->data[k+1] =l->data[k];
            }
       }
      l->data[i] = elem;
      l->length++;
      return true;
}
// add element at the rar
bool addElem(Sqlist *l,ElemType elem){
    if(l->length == MAX){
       return false;
    }else{
       l->data[l->length+1]=elem;
     return true;
}
}
//delete and make the length shorter
bool deleteElem(Sqlist *l,int i,ElemType elem){
    if(i<1||i>l->length)
        return false;
    if(i<=l->length){
         l->data[i] = 0;
         for(int k = i;k<l->length;k++){
            l->data[k] = l->data[k+1];
          }
      l->length++;
     return true;
}
}
// search ELement by location
ElemType searchElem(Sqlist *l,int i){
    if(i<1 || i>l->length)
        return 0;
    else
       return l->data[i];
}
//search location of element
ElemType searchTheElem(Sqlist *l,ElemType e){
    for(int k = 0;k<l-length;k++){
         if(l->data[k] == e){
             return k;
          }else{ return 0;}
}
}
