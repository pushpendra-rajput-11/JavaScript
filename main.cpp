#include <iostream>
using namespace std;

int main() 
{
    int A[3][3];
    for(int i=0;i<3;i++){
      for(int j=0;j<3;j++){
        cin>>A[i][j];
      }
    }
    
    int B[3][3];
    for(int i=0;i<3;i++){
      for(int j=0;j<3;j++){
        cin>>B[i][j];
      }
    }
    
    int C[3][3];
    for(int i=0;i<3;i++){
      for(int j=0;j<3;j++){
       C[i][j]=A[i][j]+B[i][j];
        
      }
    }
    
    int D[3][3];
    for(int i=0;i<3;i++){
      for(int j=0;j<3;j++){
       D[i][j]=A[i][j]-B[i][j];
        
      }
    }
    
    for(int i=0;i<3;i++){
      for(int j=0;j<3;j++){
        cout<<C[i][j]<<" ";
      }
      cout<<endl;
    }
    
    for(int i=0;i<3;i++){
      for(int j=0;j<3;j++){
        cout<<D[i][j]<<" ";
      }
      cout<<endl;
    }
    
    return 0;
}