import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {getData} from './data';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));
const Selection = () => {
    // const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const [correctness,setCorrectness] = useState("");
    // const answer = getData.map((data) => (<li key={data.contents_detail_id}>{data.answer}</li>));
    const answer = 3;
    const [btncolor,setBtnColor] = useState("");

    const handleClick = (e,selected)　=> {
        // setBtnColor("primary");
        if (selected === answer) {
            setCorrectness("正解です");
        } else {
            setCorrectness("不正解です");
        }
    };

    const handleChange = (event, value) => {
        setPage(value);
    };

    const current_data = getData.filter((data) => {
        return data.contents_detail_id === page;
    });

    const current_choice1 = current_data.map((data) =>(
                              <li key={data.contents_detail_id}>{data.choice1}</li>
                              ));
    const current_choice2 = current_data.map((data) =>(
                              <li key={data.contents_detail_id}>{data.choice2}</li>
                               ));
    const current_choice3 = current_data.map((data) =>(
                              <li key={data.contents_detail_id}>{data.choice3}</li>
                               ));
    const current_choice4 = current_data.map((data) =>(
                              <li key={data.contents_detail_id}>{data.choice4}</li>
                               ));
    
console.log(getData.length);

return (
    <div>
        <p>{correctness}</p>
        {/* 上記のcorrectnessは、正解不正解を出す領域として使う */}
        <Button variant="contained" onClick={e => handleClick(e,1)}>{current_choice1}</Button>
        <Button variant="contained" onClick={e => handleClick(e,2)}>{current_choice2}</Button>
        <Button variant="contained" onClick={e => handleClick(e,3)}>{current_choice3}</Button>
        <Button variant="contained" onClick={e => handleClick(e,4)}>{current_choice4}</Button>
        {/* ボタンをクリックしたときに、クリックされたものの番号を渡している*/}
        {/* それが、25行目のselectedに入る */}
        {/* それを引数として受け取ってAnswerの値(Data.jsx)と比較している。 */}
        {/* それが一致すると、正解と表示される。 */}
        <Typography>
            {current_data.map((data) =>(
                <li key={data.contents_detail_id}>{data.contents_statement}</li>
            ))}
        </Typography>
        <Pagination count={getData.length} page={page} onChange={handleChange} />
    </div>
    );
}

export default Selection;