import bcrypt from 'bcrypt';

const hashPassword = async() => {

    const salt = await bcrypt.genSalt(12)

    console.log("the salt is ", salt);

    const hashedValue = await bcrypt.hash("MySecretPassword",salt);

    console.log("the hashed value is the same", hashedValue);

    const hashedValue2 = await bcrypt.hash("MySecretPassword", salt);
    console.log("the second hashed value is the same: ", hashedValue2);
}

const hashPasswordInclSalt = async() => {

    const hashedValue = await bcrypt.hash("MySecretPassword", 10);
    console.log("the hashed value incl salt is: ", hashedValue);
}
//MySecretPassword 
//$2b$10$ydHpBuGtukIz07NZu5yMpuFzhCH8QNUGREtmMvfZdbOqofVob8L/i
const comparePassword = async(password, hash) => {
    const checkPassword = await bcrypt.compare(password, hash);
    console.log("passwords are matching: ", checkPassword);
}

comparePassword("MySecretPassword","$2b$10$ydHpBuGtukIz07NZu5yMpuFzhCH8QNUGREtmMvfZdbOqofVob8L/i")
hashPassword();
hashPasswordInclSalt();


//SALT: $2b$12$Dis1oNZZuGM4NygaZ6A6t.
//FULL BCRYPT RESULT: $2b$12$Dis1oNZZuGM4NygaZ6A6t.9pY9ICP4jioGRscoBiCjF6Xi0.zy8cy
//                    \_/ \_/\____________________/\______________________________/ 
//                    Alg Cost     Salt                   Hash