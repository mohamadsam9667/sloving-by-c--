#include <iostream>

using namespace std;

int main(){
    char question;
     cout<<"you want continue?(y/n)";
    cin>>question;
    while(question=='y')
    {
    int n=2;
    cin>>n;
    cout<<"W";
    for(int i=1; i<=n;i++)
    {
        cout<<"o";
    }
    cout<<"w!";
     cout<<"you want continue?(y/n)";
    cin>>question;
    }
    return 0;

}