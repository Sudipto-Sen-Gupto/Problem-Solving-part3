// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
        // let result=employees[0].starting+(employees[0].experience*employees[0].increment);
        // console.log(result);

        function remuneration (money){
            let totalOfEach;
            let total=0;
            for(const item of money){
                totalOfEach=item.starting+(item.experience*item.increment);

                total +=totalOfEach;
            }
            return total;
        }
        const monthlyExpense=remuneration(employees);
        console.log(monthlyExpense);