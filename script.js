document.getElementById('calculateBtn').addEventListener('click', function () {
     const dobInput = document.getElementById('dob').value;
     const specificDateInput = document.getElementById('specificDate').value;

     if (dobInput === '' || specificDateInput === '') {
          alert('Please enter both dates!');
          return;
     }

     const dob = new Date(dobInput);
     const specificDate = new Date(specificDateInput);

     if (specificDate < dob) {
          alert('The specific date cannot be earlier than the date of birth!');
          return;
     }

     // বছর, মাস, দিন হিসাব করা হচ্ছে
     let years = specificDate.getFullYear() - dob.getFullYear();
     let months = specificDate.getMonth() - dob.getMonth();
     let days = specificDate.getDate() - dob.getDate();

     if (days < 0) {
          months--;
          days += new Date(specificDate.getFullYear(), specificDate.getMonth(), 0).getDate();
     }

     if (months < 0) {
          years--;
          months += 12;
     }

     // মোট দিন, সপ্তাহ, ঘন্টা, মিনিট, সেকেন্ড হিসাব করা হচ্ছে
     const totalDays = Math.floor((specificDate - dob) / (1000 * 60 * 60 * 24));
     const totalWeeks = Math.floor(totalDays / 7);
     const remainingDays = totalDays % 7; // সপ্তাহ বাদে বাকি দিন
     const totalMonths = (years * 12) + months; // মোট মাস হিসাব
     const totalHours = totalDays * 24;
     const totalMinutes = totalHours * 60;
     const totalSeconds = totalMinutes * 60;

     const result = `
     <p><strong>Total Ages:</strong> ${years} Years, ${months} Months and ${days} Days</p>
     <p><strong>Total Months: </strong> ${totalMonths} Months and ${days} Days</p>
     <p><strong>Total Days:</strong> ${totalDays}</p>
     <p><strong>Total Weeks:</strong> ${totalWeeks} weeks and ${remainingDays} days</p>
     <p><strong>Total Hours:</strong> ${totalHours}</p>
     <p><strong>Total Minutes:</strong> ${totalMinutes}</p>
     <p><strong>Total Seconds:</strong> ${totalSeconds}</p>
     `;

     document.getElementById('result').innerHTML = result;
});
