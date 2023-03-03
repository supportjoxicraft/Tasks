import express from "express";
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', async (req, res) => {
    console.log('running in browser');

    // password: hnisknejllrcszoj
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
            user: 'dmoroka11@gmail.com',
            pass: 'hnisknejllrcszoj'
        }
    });

    try {
        await transporter.sendMail({
            from: '"Support @ Joxicraft <support@joxicraft.co.za>"',
            to: 'admin@joxicraft.co.za',
            subject: 'Welcome',
            text: '',
            html: `
                <div style="height: fit-content, width: fit-content; border: 1px solid rgb(200, 100, 100); border-radius: 10px">   
                    <div style ="margin: 20px">
                        <h3> Warm Welcome!</h3>
                        <p> Hi and welcome to the tech family</p>
                        <p> If you wish to upgrade to access to more features please contact us at support@joxicraft.co.za, for help with other things please contact us at admin@joxicraft.co.za or call us on 053 010 1113</p>
                    </div>
                </div>`
        });
        res.send({ message: 'success' });
    } catch (error) {
        res.send({ message: error });
    }
});

app.listen(3000, () => console.log('running'));
