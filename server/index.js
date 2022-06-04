const express = require('express');
const app = express();
const cors = require('cors');

const pool = require('./db');
//middle ware
app.use(cors());
app.use(express.json());
//routes--
//insert
app.post("/signup", async (req, res) => {
    try {
        const { name, email, role, password } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO users (u_name,u_email,u_role,u_password) VALUES($1,$2,$3,$4) returning *",
            [name, email, role, password]);
        res.json(newTodo.rows);
        console.log('insert request');

    } catch (err) {
        console.error(err.message);
    }
});

//get all
app.get("/disall", async (req, res) => {
    try {
        const disall = await pool.query(
            "SELECT * FROM users"
        );
        res.json(disall.rows);
        console.log('display request');
    } catch (err) {
        console.error(err.message);

    }
});
app.get('/coursedis/:id', async (req, res) => {
    let { id } = req.params;
    console.log('id=', id)
    try {
        const disall = await pool.query(
            "SELECT * FROM course,users where course.owner_e=users.u_email and users.u_email=$1", [id]
        );
        res.json(disall.rows);
        console.log('display request');
    } catch (err) {
        console.error(err.message);

    }
})
let em;
app.get('/dis/:id', async (req, res) => {
    let { id } = req.params;
    em = id;
    console.log(id)
    try {
        const dis = await pool.query(
            "SELECT * FROM users WHERE u_email=$1", [id]
        );
        res.json(dis.rows);
        console.log('display request');
    } catch (err) {
        console.error(err.message);

    }
});
app.post('/coursepost', async (req, res) => {
    let body = req.body;
    cid = Math.random() * 0.3;
    let { cname, cdis, cowener } = body;
    console.log(cowener, cname, cdis, em);
    try {
        const course = await pool.query(
            "INSERT INTO course (c_name,c_id,c_dis,owner_e) VALUES ($1,$2,$3,$4)",
            [cname, cid, cdis, em]
        )
        res.json(course.rows)
        console.log('course insert request')
    } catch (err) {
        console.log(err)

    }
})
app.get('/coursesel/:id', async (req, res) => {
    let { id } = req.params;
    console.log('id=', id)
    try {
        const disall = await pool.query(
            "SELECT * FROM course,users where course.owner_e=users.u_email and course.c_id=$1", [id]
        );
        res.json(disall.rows);
        console.log('single course display request');
    } catch (err) {
        console.log(err.message);

    }
})
app.post('/postcomment', async (req, res) => {
    let { cm, cmd, cmt, cid, cmemail } = req.body;
    console.log('insert comment req', cid, cmd, cmemail, cmt, cm)
    try {
        const postcomment = await pool.query(
            "INSERT INTO comment (cm_d,cm,cm_t,c_id,cm_email) VALUES ($1,$2,$3,$4,$5)",
            [cmd, cm, cmt, cid, cmemail]
        )
        res.json(postcomment.rows);
    } catch (err) {
        console.log(err);
    }
})
app.get('/getcomment/:id', async (req, res) => {
    let { id } = req.params;
    console.log('commment', id);
    try {
        const getcommet = await pool.query(
            "SELECT * FROM comment WHERE c_id=$1 ORDER BY cm_d DESC,cm_t DESC", [id]
        )
        res.json(getcommet.rows);
        console.log('get comment req')

    } catch (err) {
        console.log(err)
    }
});
app.post('/joins', async (req, res) => {
    let { cid, uemail } = req.body;
    console.log('joins', cid, uemail);
    try {
        let joins = await pool.query(
            "INSERT INTO joins (u_email,c_id) VALUES ($1,$2) ", [uemail, cid]
        )
        res.json(joins.rows);
    } catch (err) {
        console.log(err)
    }
});
app.get('/getjoins/:id', async (req, res) => {
    let { id } = req.params;
    try {
        let getJoin = await pool.query(
            'select * from joins,course where joins.c_id=course.c_id and joins.u_email=$1', [id]
        )
        res.json(getJoin.rows);

    } catch (err) {
        console.log(err)
    }
})
app.get('/getjoin/:id', async (req, res) => {
    let { id } = req.params;
    try {
        let getJoin = await pool.query(
            'select * from joins where u_email=$1', [id]
        )
        res.json(getJoin.rows);

    } catch (err) {
        console.log(err)
    }
})
app.get('/getpeoplestudent/:id', async (req, res) => {
    let { id } = req.params;
    console.log(id);
    try {
        let getPeopleStudent = await pool.query(
            'select * from joins,users where joins.u_email=users.u_email and joins.c_id=$1', [id]
        )
        res.json(getPeopleStudent.rows);
        console.log('get people student req')
    } catch (err) {
        console.log(err)
    }
}
)
app.listen(5000, () => {
    console.log('server is listening to port 5000');
})