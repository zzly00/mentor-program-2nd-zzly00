const query = require('../model/query');
const db = require('../model/db');
const he = require('he');
const moment = require("moment-timezone");

module.exports = {
    handleComments: (req, res) => {
        const sql = query.commentsQuery;
        db.conn(sql, [], (err, rows) => {
            let data = [];
            rows.map((row) => {
                const authorStatus = req.session.uId === row.u_id ? true : false;
                const comments = {
                    cId: row.c_id,
                    avatar: row.avatar,
                    content: he.escape(row.content),
                    createTime: moment(row.create_time).tz('Asia/Taipei').format('YYYY-MM-DD hh:mm:ss a'),
                    nickname: row.nickname,
                    authorStatus: authorStatus,
                    subcomment: []
                }
                if(data.length == 0 || data[data.length-1].cId !== row.c_id){
                    data.push(comments);
                }

                if(data[data.length-1].cId === row.c_id && row.s_c_id != null){
                    const sAuthorStatus = req.session.uId === row.s_u_id ? true : false;
                    const sCommentSub = row.u_id === row.s_u_id ? true : false;
                    const subcomments = {
                        sCId: row.s_c_id,
                        sAvatar: row.s_avatar,
                        sContent: he.escape(row.s_content),
                        sCreateTime: moment(row.s_create_time).tz('Asia/Taipei').format('YYYY-MM-DD hh:mm:ss a'),
                        sNickname: row.s_nickname,
                        sAuthorStatus: sAuthorStatus,
                        sCommentSub: sCommentSub
                    }
                    data[data.length-1].subcomment.push(subcomments);
                }
            })
            res.send(data);
        })
    },
    handleLoginStatus: (req, res) => {
        const sql = query.userInfoQuery;
        const insertsArr = [req.session.uId];
        db.conn(sql, insertsArr, (err, rows) => {
            if(Array.isArray(rows) && rows.length !== 0){
                let data = {
                    nickname: rows[0].nickname,
                    avatar: rows[0].avatar
                }
                res.send(data);
            }else{
                res.send(false);
            }
        })
    },
    handleCreate: (req, res) => {
        if(req.session.uId){
            const sql = query.createCommentQuery;
            const insertsArr = [req.session.uId, req.body.content, req.body.parentId];
            db.conn(sql, insertsArr, (err, rows) => {
                rows.affectedRows ? res.send('success') : res.send('error');
            })
        }else{
            res.send('error');
        }
    },
    handleUpdate: (req, res) => {
        const sql = query.checkAuthorQuery;
        const insertsArr = [req.body.cId, req.session.uId];
        db.conn(sql, insertsArr, (err, rows) => {
            if(rows[0].c_id){
                const sql = req.body.content ? query.updateCommentQuery : query.deleteCommentQuery;
                const insertsArr = req.body.content ? [req.body.content, req.body.cId] : [req.body.cId];
                db.conn(sql, insertsArr, (err, rows) => {
                    rows.affectedRows ? res.send('success') : res.send('error');
                })
            }else{
                res.send('error');
            }
        })
    }
}