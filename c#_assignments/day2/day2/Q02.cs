using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace day2
{
    public class Q02
    {
        /// <summary>
        /// Print odd numbers less than 50 using while loop
        /// </summary>
        public void Answer()
        {
            int counter = 0;
            while (counter<50) 
            {
                if (counter % 2 != 0)
                {
                    Console.WriteLine("odd number = " + counter);
                }
                counter++;
            }
            Console.WriteLine();
        }
         
    }
    
}
