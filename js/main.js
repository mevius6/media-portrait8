{
	const animateHeader = function(Header, ratio) {
		if (ratio > 0) {
			if (false && Header.tagName === "h2") {
			} else {
				Header.classList.add("in-view")
			}
		} else {
			Header.classList.remove("in-view")
		}
	}

	const Headers = document.querySelectorAll(".grid__item-text .heading")
	const HeadersObserver = new IntersectionObserver(
		entries => {
			return entries.forEach(e => {
				animateHeader(e.target, e.intersectionRatio)
			})
		},
		{ threshold: 1.0 }
	)
	for (const Header of Headers) {
		HeadersObserver.observe(Header)
		HeadersObserver.observe(Header.closest("article"))
	}

	const animateParagraph = function(Paragraph, ratio) {
		if (ratio > 0) {
			if (false && Paragraph.tagName === "p") {
			} else {
				Paragraph.classList.add("in-view")
			}
		} else {
			Paragraph.classList.remove("in-view")
		}
	}

	const Paragraphs = document.querySelectorAll(".grid__item-text .paragraph")
	const ParagraphsObserver = new IntersectionObserver(
		entries => {
			return entries.forEach(e => {
				animateParagraph(e.target, e.intersectionRatio)
			})
		},
		{ threshold: 1.0 }
	)
	for (const Paragraph of Paragraphs) {
		ParagraphsObserver.observe(Paragraph)
		ParagraphsObserver.observe(Paragraph.closest("article"))
	}
}
