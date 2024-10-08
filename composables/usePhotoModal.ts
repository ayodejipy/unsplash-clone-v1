type TModalTypes = 'photo-info'

export default function usePhotoModal() {
    const modal = useState<TModalTypes | null>('modal', () => null)
    const payload = ref<string | null>(null) // type can be extended

    const setModal = (type: TModalTypes | null, data: string) => {
        modal.value = type
        payload.value = data as string
    }

    const onCloseModal = () => {
        modal.value = null
        payload.value = null
    }

    return {
        payload,
        modal,
        setModal,
        onCloseModal,
    }
}
