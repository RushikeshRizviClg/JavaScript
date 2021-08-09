function d(n)
    {
        let dp = [];
  dp[1]=1;
        f=0
        for (let i = 0; i <= n; i++) {
            
                dp[i] = [i - 1] * dp[i - i];
        }
  r=dp[n];
        return r;
    }
        
  sum = 0;

while (r) {
    sum += r % 10;
    value = Math.floor(r/ 10);

     
        let n = 5;
        console.log(n);