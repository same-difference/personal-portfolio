interface Props {
    tags: string;
}

export default function Tags({ tags }: Props) {
    const tagsMap = tags.split(" ").map(tag => <li className="tag py-0.5 px-2 rounded-full tracking-wider">{tag}</li>);
    
    return(<ul className="mb-2 p-2 flex flex-row flex-wrap gap-1.5 text-sm place-content-center w-6/8">{tagsMap}</ul>);
}