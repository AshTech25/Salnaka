import * as moment from 'moment';

 export const CheckApprovalDate = (user) => {
     let isValidForWithdrawal = true;
     if(user && user.approvalDate){
         console.log("approval date", user.approvalDate)
         let date = moment.utc(user.approvalDate).local().format('YYYY-MM-DD');
         let a = moment(date);
         let b = moment();
         console.log("a", a, "b", b, "date", date);
         let diffInDays = b.diff(a, 'days')
         console.log("diff--",diffInDays)
         if(diffInDays < 5){
             isValidForWithdrawal = false
         }
     }
     console.log("isvalid",isValidForWithdrawal)
    return !isValidForWithdrawal;   // ! sign for disable if isValidForWithdrawal === false  
}

export const CheckAccountInfo = (info) => {
    let validInfo = false;
    if(info && info.accountHolderName && info.accountNumber && info.nicNumber && info.nicImages && info.nicImages.length == 2){
        validInfo = true;
    }
    return validInfo;
}