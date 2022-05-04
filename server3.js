import bcrypt from 'bcrypt';

const plainTextPassword = "Wat$2Rce*";

const compareItems = () => {
    console.time(`RESPONSE TIME`)
    const isChecked = bcrypt.compareSync(plainTextPassword, "$2b$17$L8/j3qxNbkI6ESJsxGDL4OPDma8FUl9bhyo5VcaQXGhM6yU1ACL7K")
    console.timeEnd(`RESPONSE TIME`)

    console.log("the password is correct: ", isChecked);
}

compareItems();