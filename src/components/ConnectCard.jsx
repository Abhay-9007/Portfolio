function ConnectCard(props) {

    const openLink = (url) => {
        window.open(url, "_blank")
    }

    return (
        <div className="w-1/4 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 m-3 text-center">

            {/* <h1 className="text-3xl font-bold mb-6 border-b pb-2">
                {props.name}
            </h1> */}

            <h1
                className="text-xl p-4 rounded-lg hover:bg-white/10 cursor-pointer transition"
                onClick={() => openLink(props.l1)}
            >
                → {props.n1}
            </h1>

            <h1
                className="text-xl p-4 rounded-lg hover:bg-white/10 cursor-pointer transition"
                onClick={() => openLink(props.l2)}
            >
                → {props.n2}
            </h1>

            <h1
                className="text-xl p-4 rounded-lg hover:bg-white/10 cursor-pointer transition"
                onClick={() => openLink(props.l3)}
            >
                → {props.n3}
            </h1>

            {/* <h1
                className="text-xl p-2 rounded-lg hover:bg-white/10 cursor-pointer transition"
                onClick={() => openLink(props.l4)}
            >
                → {props.n4}
            </h1> */}

        </div>
    )
}

export default ConnectCard