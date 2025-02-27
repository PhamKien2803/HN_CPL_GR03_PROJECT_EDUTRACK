import React from 'react'
import '../../../../Sass/RightContent.scss'
import { CountDown } from '../exam-timer/CountDown';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';


interface Data {
    id: string;
    content: string;
    image: string;
    answer: { id: string; isSelected: boolean }[];
    exId: string;
}
interface Props {
    dataExam: Data[],
    setIndex: (id: number) => void
    timer?: string
    handleFinish: () => void
}
export const RightContent: React.FC<Props> = (props) => {
    const { t } = useTranslation();
    const { dataExam, setIndex, timer, handleFinish } = props

    console.log(dataExam);
    const getClassNameQs = (item: Data): string => {
        const checkedAnswer = item.answer.every(item => item.isSelected === false)
        return checkedAnswer ? 'checked question' : 'question selected'
    }

    return (
        <>
            <div className="main-timer">
                <h3>{t('main_timer_title')}</h3>
                <CountDown timer={timer} exID={dataExam[0].exId} />
            </div>
            <div className="main-question">
                <div className="q-idndex">
                    {dataExam.map((item, index) => (
                        <div key={`qi-${index}`} onClick={() => setIndex(index)} className={getClassNameQs(item)}>{index + 1}</div>
                    ))
                    }
                </div>
                <div className='btn'>
                    <Button
                        onClick={handleFinish}
                        variant="contained"
                        color='warning'
                    >
                        {t('finish_button')}
                    </Button>
                </div>

            </div>
        </>
    )
}
