#include <iostream>

using namespace std;
void quick_sort(int A[] ,int low ,int high){
    if (low>=high)
    return;
    else 
    {
        j=partion(A,low,high);
        quick_sort(A[],low,j-1);
        quick_sort(A[],j+1,high);
        combaine not requested;
    }

}
int partion(int A[],int low,int high)
{
    v=A[low];i=low;j=high+1;
    do{
        do{
            i++;
        }while(A(i)<v)
        do{
            j--;
        }while(A(j)>v)
        if(i<j) exchange (A,i,j);
    }while(i<=j)
    A(low)=A(j);
    A(j)=v;
    return j;



}

int main(){






    return 0;

}