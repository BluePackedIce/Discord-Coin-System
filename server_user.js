class server_user {
constructor()
{
     this.credit = 0;
     this.coin = 0;
     this.rank = "normal";
}

give_credit(add)
{
    let add_ = parseInt(add);
    let now_credit = parseInt(this.credit);
    now_credit += add_;
    this.credit = now_credit;
    console.log(`${add}コインが追加されました\n合計：${this.credit}`);
}
};

module.exports = server_user;
