interface Props {
    children: React.ReactNode;
    link: string;
    target?: string;
}

export default function Url({children, link, target}: Props) {
    return (<a className="underline hover:font-semibold focus:font-semibold active:hover:font-semibold text-[#b04c5b]" href={link} target={target ? target : "_blank" }>{children}</a>);
}
