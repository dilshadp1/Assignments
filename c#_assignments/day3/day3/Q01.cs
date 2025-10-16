using System;
using System.Collections.Generic;
using System.Diagnostics.Metrics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;


namespace day3
{
    public class Q01
    {
        /// <summary>
        /// Input two numbers and perform all arithmetic operations (+, -, *, /, %).
        /// </summary>
        public static void Answer()
        {
            int number1, number2;
            int add, sub, mul;
            float div;
            Console.Write("Enter first number : ");
            int.TryParse(Console.ReadLine(), out number1);
            Console.Write("Enter second number : ");
            int.TryParse(Console.ReadLine(), out number2);

            add=number1 + number2;
            sub=number1 - number2;
            mul=number1 * number2;
            div=number1 / number2;

            Console.WriteLine($"sum = {add}\ndifference = {sub}\nproduct = {mul}\ndivision = {div}");
            Console.WriteLine();
        }
         
    }
    
}
