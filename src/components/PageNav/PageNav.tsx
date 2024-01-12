import Button from "../Button/Button";

export default function PageNav({ active, onPageChange }) {
    return (
      <section>
        <div className="container">
            <div className="flex">
                <Button className={"flex-1"} isActive={active==='main'} btnClick={() => onPageChange('main')}>
                    Main page
                </Button>
                <Button className={"flex-1"} isActive={active==="second"} btnClick={() => onPageChange('second')}>
                    Feedback
                </Button>

            </div>

        </div>
      </section>
      )
  }