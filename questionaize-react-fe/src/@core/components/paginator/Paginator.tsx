import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import "./Paginator.scss"

interface Props {
	page: number
	totalPage: number
	handleChangPage: (page: number) => void
}

export default function Paginator(props: Props) {
	let paging = () => {
		console.log(props)
		let arrPages = []
		for (let i = props.page - 2; i <= props.page + 2; i++) {
			if (i <= 0 || i > props.totalPage) continue
			arrPages.push(i)
		}
		console.log(arrPages)

		return arrPages.map((i, index) => {
			const first = index === 0 ? "first-item" : ""
			return (
				<span
					key={`page-${i}`}
					onClick={() => props.page !== i && props.handleChangPage(i)}
					className={props.page === i ? `current ${first}` : `point ${first}`}
				>
					{i}
				</span>
			)
		})
	}

	return (
		<div className="paginator d-flex justify-content-center align-items-center">
			<div className="content">
				{props.page !== 1 && (
					<ArrowBackIos
						className="icon first"
						onClick={() => props.handleChangPage(props.page - 1)}
						
					/>
				)}
				{paging()}
				{props.totalPage !== 0 && props.page !== props.totalPage && (
					<ArrowForwardIos
						className="icon last"
						onClick={() => props.handleChangPage(props.page + 1)}
					/>
				)}
			</div>
		</div>
	)
}
