const AtencionModel = require('../../models/atencionModel');
const { MailerSend, EmailParams, Sender, Recipient } = require('mailersend');
const cron = require('node-cron');
const moment = require('moment-timezone');

const mailerSendClient = new MailerSend({
    apiKey: 'mlsn.4507d213810216ca0a8a06bb9c5b4a3c7caee9ba400130c3719251d0738ae78d'
});


const sendEmail = async (input) => {
    const sentFrom = new Sender('tu_nombre@trial-3yxj6ljv3xxldo2r.mlsender.net', 'Your Name');
    const recipient = new Recipient(input.correo, 'Recipient Name');

    const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo([recipient])
        .setSubject('Hora agendada con exito')
        .setHtml(`La hora ha sido agendada con exito:<br>
                 Descripcion: ${input.descripcion}<br>
                 Fecha: ${input.fecha}<br>
                 Hora: ${input.hora}<br>
                 Doctor: ${input.id_medico}<br>
                 Paciente: ${input.usuarioId}`)
        .setText(`La hora ha sido agendada con exito:\n
                 Descripcion: ${input.descripcion}\n
                 Fecha: ${input.fecha}\n
                 Hora: ${input.hora}\n
                 Doctor: ${input.id_medico}\n
                 Paciente: ${input.usuarioId}`);

    try {
        const response = await mailerSendClient.email.send(emailParams);
        console.log('Email sent:', response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};


const sendReminderEmail = async (input) => {
    const emailParams = new EmailParams()
        .setFrom(new Sender('tu_nombre@trial-3yxj6ljv3xxldo2r.mlsender.net', 'Your Name'))
        .setTo([new Recipient(input.correo, 'Recipient Name')])
        .setSubject('Recordatorio de su próxima atención médica')
        .setHtml(`Le recordamos que tiene una atención médica agendada en 30 minutos:<br>
                 Descripción: ${input.descripcion}<br>
                 Fecha: ${input.fecha}<br>
                 Hora: ${input.hora}<br>
                 Doctor: ${input.id_medico}<br>
                 Paciente: ${input.usuarioId}`)
        .setText(`Le recordamos que tiene una atención médica agendada en 30 minutos:\n
                 Descripción: ${input.descripcion}\n
                 Fecha: ${input.fecha}\n
                 Hora: ${input.hora}\n
                 Doctor: ${input.id_medico}\n
                 Paciente: ${input.usuarioId}`);

    try {
        const response = await mailerSendClient.email.send(emailParams);
        console.log('Reminder email sent:', response);
    } catch (error) {
        console.error('Error sending reminder email:', error);
    }
};

const atencionFuncionMutation = {
    async addAtencion(_, { input }) {
        const atencionTime = moment.tz(`${input.fecha} ${input.hora}`, 'YYYY-MM-DD HH:mm', 'America/Santiago');
        const now = moment.tz('America/Santiago');
        
        if (atencionTime.isBefore(now)) {
            throw new Error('La fecha y hora de la atención deben ser en el futuro.');
        }

        const nuevaAtencion = new AtencionModel(input);
        await nuevaAtencion.save();

        await sendEmail(input);

        const reminderTime = atencionTime.clone().subtract(30, 'minutes');

        if (reminderTime.isAfter(now)) {
            const cronExpression = `${reminderTime.minute()} ${reminderTime.hour()} ${reminderTime.date()} ${reminderTime.month() + 1} *`;
            cron.schedule(cronExpression, () => {
                sendReminderEmail(input);
            }, {
                scheduled: true,
                timezone: "America/Santiago"
            });
            console.log(`Reminder scheduled for ${reminderTime.format('YYYY-MM-DD HH:mm')}`);
        } else {
            console.log('Reminder time has already passed.');
        }

        return nuevaAtencion;
    },
};

module.exports = {
    atencionFuncionMutation
};
