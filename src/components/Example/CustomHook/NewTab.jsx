import useLinkNewTab from '../../../hooks/useLinkNewTab';
import useHover from '../../../hooks/useHover';

const NewTab = () => {
    const { contentRef } = useLinkNewTab();
    const { hover, nodeRef } = useHover();

    // useLinkNewTab + useHover
    return (
        <div className="content flex" ref={contentRef}>
            <div className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                ratione fuga ipsum rem perferendis debitis ab expedita. Esse
                numquam quos ducimus ab, debitis asperiores impedit, mollitia
                recusandae totam, vitae consectetur?
                <a
                    href="https://google.com"
                    className={`underline ${hover ? 'text-green-400' : ''}`}
                    ref={nodeRef}
                >
                    Google
                </a>
            </div>

            <div className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                ratione fuga ipsum rem perferendis debitis ab expedita. Esse
                numquam quos ducimus ab, debitis asperiores impedit, mollitia
                recusandae totam, vitae consectetur?
                <a href="https://google.com" className="underline">
                    Google
                </a>
            </div>

            <div className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                ratione fuga ipsum rem perferendis debitis ab expedita. Esse
                numquam quos ducimus ab, debitis asperiores impedit, mollitia
                recusandae totam, vitae consectetur?
                <a href="https://google.com" className="underline">
                    Google
                </a>
            </div>
        </div>
    );
};

export default NewTab;
