import style from '../styles/Search.module.css';

interface Props {
    name: string;
    number: number;
}
export const GitInfoCard = ({name, number}: Props) => {
    return (
        <div className={style.gitRepo}>
                    <div className={style.repos}>
                        <div className={style.repoHeading}>{name}</div>
                        <div className={style.repoTotal}>{number}</div>
                    </div>
                </div>
    )
}