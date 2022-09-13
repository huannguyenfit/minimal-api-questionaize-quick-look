import { PopoverOrigin } from "@mui/material"
import { MoreHoriz } from "@mui/icons-material"
import classNames from "classnames"
import React from "react"
import { NestedMenu, NestedMenuItem } from "../nested-menu/NestedMenu"
import "./RowCard.scss"

interface Props {
	id: number
	children?: JSX.Element
	dropdownItems?: NestedMenuItem[]
	onClick?: () => void
	optionIcon?: React.ReactNode
	className?: string
	anchorOrigin?: PopoverOrigin
	transformOrigin?: PopoverOrigin
}

const RowCard = (props: Props): JSX.Element => {
	return (
		<div
			className={classNames("row-card col-12 mb-3", props.onClick && "cur", props.className)}
			onClick={props.onClick}
		>
			<div className='row d-flex align-items-center'>
				<div key={`row-card-${props.id}`} className='col-12 d-flex align-items-center'>
					<div className='detail d-flex align-items-center'>
						{props.children}

						{props.dropdownItems && (
							<div className='dropdown-more ml-auto'>
								<NestedMenu
									className={`ml-2 ${props.className}`}
									popoverClassName='z-index-2'
									items={props.dropdownItems}
									icon={props.optionIcon ? props.optionIcon : <MoreHoriz className='dropdown-more-icon' />}
									anchorOrigin={props.anchorOrigin}
									transformOrigin={props.transformOrigin}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
export default RowCard
