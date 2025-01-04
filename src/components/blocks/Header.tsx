type Props = {
    title: string;
    description: string;
};

export default function Header({ title, description }: Props) {
    return (
        <div className="text-center mb-8 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
    );
}
