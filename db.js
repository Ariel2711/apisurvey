const sql = require("mssql/msnodesqlv8");

let pool = null;

function connection() {
    try {
        var config = {
            // user: 'DESKTOP-5VS88JF\\USER',
            // password: '',
            server: 'DESKTOP-5VS88JF',
            database: 'survey',
            driver: 'msnodesqlv8',
            options: {
                trustedConnection: true
            },
            trustServerCertificate: true
        };

        sql.connect(config);

    } catch (error) {
        console.log(error);
    }
}

async function getUsers() {
    try {
        var req = new sql.Request();
        const {recordset} =  await req.query('select * from [User]');
        return recordset;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function getUsersbyLogin(username,password) {
    try {
        var req = new sql.Request();
        req.input('username', sql.VarChar, username)
        req.input('password', sql.VarChar, password)
        const {recordset} =  await req.query('select * from [User] where username=@username and password = @password');
        return recordset;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function getSurveyorbyLogin(id) {
    try {
        var req = new sql.Request();
        req.input('id', sql.Int, id)
        const {recordset} =  await req.query('select * from [Surveyor] where id_user = @id');
        return recordset;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function createResponden(nama, alamat, telepon, tgl_create) {
    try {
        var req = new sql.Request();
        req.input('nama', sql.VarChar, nama)
        req.input('alamat', sql.VarChar, alamat)
        req.input('telepon', sql.Int, telepon)
        req.input('tgl_create', sql.Date, tgl_create)
        const {rowsAffected} =  await  req.query('insert into [Responden] (nama,alamat,telepon,tgl_create) values (@nama,@alamat,@telepon,@tgl_create)');
        return !!rowsAffected[0];
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function getLastResponden() {
    try {
        var req = new sql.Request();
        const {recordset} =  await req.query('select top 1 * from [Responden] order by id_responden desc');
        return recordset;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function getSurveys() {
    try {
        var req = new sql.Request();
        const {recordset} =  await req.query('select * from [Survey]');
        return recordset;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function getSurveyByID(id) {
    try {
        var req = new sql.Request();
        req.input('id', sql.Int, id)
        const {recordset} =  await req.query('select * from [Survey] where id_survey = @id');
        return recordset;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function getJawabanByID(id) {
    try {
        var req = new sql.Request();
        req.input('id', sql.Int, id)
        const {recordset} =  await req.query('select * from [Jawaban] where id_survey = @id');
        return recordset;
    } catch (error) {
        // console.log(error);
        return null;
    }
}

async function createRespond(id_survey, id_responden, id_surveyor, jawaban, tgl_create) {
    try {
        var req = new sql.Request();
        req.input('id_survey', sql.Int, id_survey)
        req.input('id_responden', sql.Int, id_responden)
        req.input('id_surveyor', sql.Int, id_surveyor)
        req.input('jawaban', sql.VarChar, jawaban)
        req.input('tgl_create', sql.Date, tgl_create)
        const {rowsAffected} =  await  req.query('insert into [Respond] (id_survey,id_responden,id_surveyor,jawaban,tgl_create) values (@id_survey,@id_responden,@id_surveyor,@jawaban,@tgl_create)');
        return !!rowsAffected[0];
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function getRespond() {
    try {
        var req = new sql.Request();
        const {recordset} =  await req.query('select * from [Respond]');
        return recordset;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function getRespondBySurvey(id) {
    try {
        var req = new sql.Request();
        req.input('id', sql.Int, id)
        const {recordset} =  await req.query('select * from [Respond] where id_survey = @id');
        return recordset;
    } catch (error) {
        console.log(error);
        return null;
    }
}


module.exports = {
    connection,
    getUsers,
    getUsersbyLogin,
    getSurveyorbyLogin,
    createResponden,
    getLastResponden,
    getSurveys,
    getSurveyByID,
    getJawabanByID,
    createRespond,
    getRespond,
    getRespondBySurvey
}