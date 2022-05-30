import styles from './PanelType.module.css';

export default function PanelType(props) {
    const type = props.type;
    const typeTitle = props.typeTitle

    return (
        <div className={styles.type}>
            {typeTitle ? (<h2 className={styles.title}>
                {typeTitle}
            </h2>) :
            null}
            {type ? (
                <ul>
                    {type.map((items) => (
                        <li key={Math.toString()
                        }>
                            <h2>
                                {items.title}
                            </h2>
                            <p>
                                {items.desc}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}
